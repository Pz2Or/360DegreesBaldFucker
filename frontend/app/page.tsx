import Header from "@/components/header";
import { fetchData } from "@/lib/fetch";
import CardList from "@/components/card-list";

export default async function Home() {
    const { data } = await fetchData();
    return (
      <div>
        <Header/>
        <CardList/>
      </div>
    );
}