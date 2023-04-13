import React, { useState } from "react";

export const QandAs = () => {
  const questions = [
    {
      id: "q1",
      label: "Can I donate monthly?",
      content:
        "Yes, you can choose the payment method in the payment page. You can check the detail in the below. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore sapiente molestiae, voluptatibus voluptatem exercitationem voluptas. Mollitia eius ullam nobis.",
    },
    {
      id: "q2",
      label: "Can I follow the infomration of the red panda I adopted?",
      content:
        "Yes, but as they are in the wild, the news may update slowly. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore sapiente molestiae, voluptatibus voluptatem exercitationem voluptas. Mollitia eius ullam nobis.",
    },
    {
      id: "q3",
      label: "Can I cancel my monthly donation?",
      content:
        "Yes, you can cancel your subscribtion anytime you want. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore sapiente molestiae, voluptatibus voluptatem exercitationem voluptas. Mollitia eius ullam nobis.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (index) => {
    if (index === expandedIndex) setExpandedIndex(-1);
    else setExpandedIndex(index);
  };
  const renderedList = questions.map((question, index) => {
    //isExpanded 和 content写在map里面， 通过赋值的方式来控制图标和显示的段落
    const isExpanded = index === expandedIndex;
    const content = isExpanded && (
      <div className="font-semibold pt-2">{question.content}</div>
    );
    const icon = (
      <span className="self-end transition-all pl-2">
        {isExpanded ? (
          <ion-icon name="chevron-up-outline"></ion-icon>
        ) : (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}
      </span>
    );
    return (
      <div
        className="bg-white p-6 border-2 hover:cursor-pointer"
        key={question.id}
      >
        <div
          className="flex items-center justify-between"
          onClick={() => handleClick(index)}
        >
          <h4 className="font-bold text-lg">{question.label}</h4>
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="mb-2">{renderedList}</div>;
};
