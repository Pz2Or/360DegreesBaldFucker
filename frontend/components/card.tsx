interface WordCardProps {
    word: string;
    meaning: string;
    origin: string;
    explanation: string;
}

export const WordCard: React.FC<WordCardProps> = ({
    word,
    meaning,
    origin,
    explanation,
}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{word}</div>
                <p className="text-gray-700 text-base">{meaning}</p>
                <p className="text-gray-600 text-sm mt-4">{explanation}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Origin: {origin}
                </span>
            </div>
        </div>
    );
};
