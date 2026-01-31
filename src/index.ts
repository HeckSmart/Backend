import "dotenv/config";
import { app, database } from "./composition-root.js";

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  const connected = await database.ping();
  if (connected) {
    console.log("Database connected");
  } else {
    console.error("Database connection failed");
  }
});

function shutdown(): void {
  console.log("Shutting down...");
  server.close(() => {
    database
      .close()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
