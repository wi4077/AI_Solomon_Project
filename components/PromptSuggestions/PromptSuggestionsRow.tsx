import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
  const prompts = [
    '확정일자는 왜 필요하나요?',
    '계약 기간은 어떻게 설정하나요?',
    '보증금·월세 납부 일정은 어떻게 되나요?',
    '중도 해지 시 위약금 규정은 어떻게 되나요?',
  ];

  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
