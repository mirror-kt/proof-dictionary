import { Icon } from "@iconify/react";
import Linkify from "linkify-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { gitHubOwner, githubDefaultBranch, githubRepo } from "@/const/github";
import type { Dictionary } from "../utils/loadDictionaries";

export type DictionaryItemProps = {
  dictionary: Dictionary;
};

export async function DictionaryItem({ dictionary }: DictionaryItemProps) {
  return (
    <div className="my-4 space-y-3">
      <h2 className="text-2xl font-semibold" id={dictionary.id}>
        {dictionary.name}
        <Link
          href={`https://github.com/search?q=repo%3A${gitHubOwner}%2F${githubRepo}+${dictionary.id}&type=code`}
          target="_blank"
        >
          <Icon
            icon="ic:baseline-search"
            mode="style"
            color="blue"
            inline={true}
          />
        </Link>
        <Link
          href={`https://proofdict.github.io/editor/?owner=${gitHubOwner}&repo=${githubRepo}&branch=${githubDefaultBranch}&dictionaryContent=${encodeURI(JSON.stringify(dictionary))}`}
          target="_blank"
        >
          <Icon
            icon="ic:baseline-edit"
            mode="style"
            color="blue"
            inline={true}
          />
        </Link>
      </h2>
      {dictionary.tags && (
        <>
          <span>Tags:</span>{" "}
          {dictionary.tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </>
      )}

      <h3 className="text-xl">Description</h3>
      <span>
        <Linkify
          options={{
            tagName: {
              url: () => Link,
            },
            target: "_blank",
          }}
        >
          {dictionary.description}
        </Linkify>
      </span>

      <h3 className="text-xl">Patterns</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pattern</TableHead>
            <TableHead>Expected</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dictionary.patterns.map((pattern) => (
            <TableRow key={pattern}>
              <TableCell>{pattern}</TableCell>
              <TableCell>{dictionary.expected}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dictionary.allows && (
        <>
          <h3 className="text-xl">Allows</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Allows</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dictionary.allows.map((allows) => (
                <TableRow key={allows}>
                  <TableCell>{allows}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      {dictionary.specs && (
        <>
          <h3 className="text-xl">Examples</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Before</TableHead>
                <TableHead>After</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dictionary.specs.map((spec) => (
                <TableRow key={spec.from}>
                  <TableCell>{spec.from}</TableCell>
                  <TableCell>{spec.to}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}
