import { gitHubOwner, githubDefaultBranch, githubRepo } from "@/const/github";

function Editor() {
  return (
    <iframe
      title="Proofdict Editor"
      src={`https://proofdict.github.io/editor/?owner=${gitHubOwner}&repo=${githubRepo}&branch=${githubDefaultBranch}`}
      className="w-screen h-screen external-iframe"
    />
  );
}

export default Editor;
