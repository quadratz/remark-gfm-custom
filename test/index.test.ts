import { assertRejects } from "@std/assert";
import { check } from "./utils.ts";
import stringLength from "string-length";

Deno.test("default", async () => await check("default"));

Deno.test("with options", async (t) => {
  await t.step("remarkGfm", async (t) => {
    await t.step(
      "firstLineBlank",
      async () =>
        await check("first-line-blank", {
          remarkGfm: { firstLineBlank: true },
        }),
    );

    await t.step(
      "singleTilde",
      async () =>
        await check("single-tilde", { remarkGfm: { singleTilde: false } }),
    );

    await t.step(
      "stringLength",
      async () => await check("string-length", { remarkGfm: { stringLength } }),
    );

    await t.step(
      "tableCellPadding",
      async () =>
        await check("table-cell-padding", {
          remarkGfm: { tableCellPadding: false },
        }),
    );

    await t.step("tablePipeAlign", async () =>
      await check("table-pipe-align", {
        remarkGfm: { tablePipeAlign: false },
      }));
  });

  await t.step("plugins", async (t) => {
    await t.step(
      "autolinkLiteral",
      async () =>
        await check("auto-link-literal", {
          plugins: { autolinkLiteral: false },
        }),
    );

    await t.step("footnote", async () =>
      await check("footnote", {
        plugins: { footnote: false },
      }));

    await t.step("strikethrough", async () =>
      await check("strikethrough", {
        plugins: { strikethrough: false },
      }));

    await t.step("table", async () =>
      await check("table", {
        plugins: { table: false },
      }));

    await t.step("taskListItem", async () =>
      await check("task-list-item", {
        plugins: { taskListItem: false },
      }));

    await t.step(
      "should not disable other plugins",
      async () =>
        await check("should-not-disable-other-plugins", {
          plugins: { taskListItem: false },
        }),
    );

    await t.step("should throw error on unknown field", () => {
      async function actual() {
        // @ts-expect-error For testing
        await check("table", { plugins: { foo: true } });
      }

      assertRejects(
        actual,
        TypeError,
        'Unknown "foo" for plugin options. Please ensure your config is not mistyped.',
      );
    });
  });
});
