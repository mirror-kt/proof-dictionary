import Toc from "@/components/toc/toc";
import { DictionaryItem } from "@/features/dictionary/components/dictionaryItem";
import { loadDictionaries } from "@/features/dictionary/utils/loadDictionaries";

export default async function Home() {
  const dictionaries = await loadDictionaries();

  return (
    <div className="max-w-full m-10 flex justify-center">
      <div className="dict">
        {dictionaries.map((dictionary) => (
          <DictionaryItem dictionary={dictionary} key={dictionary.id} />
        ))}
      </div>
      <div className="hidden md:inline-block">
        <Toc />
      </div>
    </div>
  );
}
