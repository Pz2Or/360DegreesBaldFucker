"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/lib/fetch";
import { WordCard } from "@/components/card";

// TypeScriptの型定義（もしfetchDataから返されるデータの形式がわかっている場合）
interface WordData {
    word: string;
    meaning: string;
    origin: string;
    explanation: string;
}

export default function CardList() {
    // dataの初期値を空の配列に設定し、型をWordDataの配列に指定
    const [data, setData] = useState<WordData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await fetchData();
                // fetchDataから返されるdataがWordDataの配列であることを確認
                setData(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {data.map((word) => (
                <WordCard
                    key={word.word} // keyをwordプロパティに変更
                    word={word.word}
                    meaning={word.meaning}
                    origin={word.origin}
                    explanation={word.explanation}
                />
            ))}
        </>
    );
}
