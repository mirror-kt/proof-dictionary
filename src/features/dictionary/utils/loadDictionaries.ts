import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";
import * as v from "valibot";

const TestCaseSchema = v.object({
  from: v.string(),
  to: v.string(),
});

const DictionarySchema = v.object({
  name: v.string(),
  id: v.string(),
  description: v.string(),
  expected: v.string(),
  patterns: v.array(v.string()),
  allows: v.optional(v.array(v.string())),
  specs: v.optional(v.array(TestCaseSchema)),
  tags: v.optional(v.array(v.string())),
});

export type Dictionary = v.InferOutput<typeof DictionarySchema>;

export async function loadDictionaries(): Promise<Array<Dictionary>> {
  const files = await fs.readdir(
    path.resolve(process.cwd(), "_data", "proofdict"),
  );

  const contents = await Promise.all(
    files.map(async (fileName) => {
      const content = await fs.readFile(
        path.resolve(process.cwd(), "_data", "proofdict", fileName),
      );

      return {
        name: fileName.replace(/\.ya?ml$/, ""),
        ...(yaml.load(content.toString()) as object),
      };
    }),
  );

  const result = v.safeParse(v.array(DictionarySchema), contents);

  if (result.success) {
    return result.output;
  } else {
    throw new v.ValiError(result.issues);
  }
}
