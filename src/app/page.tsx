import Toc from "@/components/toc/toc";
import { DictionaryItem } from "@/features/dictionary/components/dictionaryItem";
import { loadDictionaries } from "@/features/dictionary/utils/loadDictionaries";

export default async function Home() {
  const dictionaries = await loadDictionaries();

  return (
    <div className="max-w-full m-10 flex justify-center">
      <div className="dict max-w-full">
        {dictionaries.map((dictionary) => (
          <DictionaryItem dictionary={dictionary} key={dictionary.id} />
        ))}
      </div>
      <div className="hidden lg:inline-block">
        <Toc />
      </div>
    </div>
  );
}
