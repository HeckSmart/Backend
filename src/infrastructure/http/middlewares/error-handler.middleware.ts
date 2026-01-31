import type { Request, Response, NextFunction } from "express";
import { DomainError } from "../../../domain/errors/index.js";

export interface ErrorResponse {
  error: string;
  code?: string;
  statusCode: number;
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof DomainError) {
    res.status(400).json({
      error: err.message,
      code: err.code,
      statusCode: 400,
    } satisfies ErrorResponse);
    return;
  }

  if (err instanceof SyntaxError) {
    res.status(400).json({
      error: "Invalid JSON",
      code: "INVALID_JSON",
      statusCode: 400,
    } satisfies ErrorResponse);
    return;
  }

  console.error(err);
  res.status(500).json({
    error: "Internal server error",
    code: "INTERNAL_ERROR",
    statusCode: 500,
  } satisfies ErrorResponse);
}
