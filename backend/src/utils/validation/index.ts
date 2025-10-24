import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas and utilities
 *
 * @module utils/validation
 */

/**
 * @summary
 * Validates a string with optional max length
 *
 * @function zString
 * @param {number} [maxLength] - Maximum string length
 * @returns {z.ZodString} Zod string schema
 */
export const zString = (maxLength?: number): z.ZodString => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema;
};

/**
 * @summary
 * Validates a nullable string with optional max length
 *
 * @function zNullableString
 * @param {number} [maxLength] - Maximum string length
 * @returns {z.ZodNullable<z.ZodString>} Zod nullable string schema
 */
export const zNullableString = (maxLength?: number): z.ZodNullable<z.ZodString> => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary
 * Validates a required name field (1-200 characters)
 *
 * @constant zName
 */
export const zName = z.string().min(1).max(200);

/**
 * @summary
 * Validates a nullable description field (max 500 characters)
 *
 * @constant zNullableDescription
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary
 * Validates a positive integer ID
 *
 * @constant zId
 */
export const zId = z.number().int().positive();

/**
 * @summary
 * Validates a nullable positive integer foreign key
 *
 * @constant zNullableFK
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @summary
 * Validates a bit field (0 or 1)
 *
 * @constant zBit
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @summary
 * Validates a date string in ISO format
 *
 * @constant zDateString
 */
export const zDateString = z.string().datetime();
