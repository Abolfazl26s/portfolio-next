import React from "react";

// 1. Define TypeScript interfaces for props (English only)
interface Skill {
  name_en: string;
  levelOfSkill: number;
}

interface SkillItemProps {
  skillItem: Skill;
}

// The approximate circumference of the SVG circle (2 * PI * radius). Used for the progress animation.
const CIRCLE_CIRCUMFERENCE = 629;

/**
 * A memoized component to display a single skill as a circular progress bar.
 * Using React.memo prevents re-renders if props have not changed, which is a key performance optimization.
 */
const SkillItem: React.FC<SkillItemProps> = React.memo(({ skillItem }) => {
  // Destructure props for easier access. We can rename `name_en` to `skillName` directly.
  const { name_en: skillName, levelOfSkill } = skillItem;

  /**
   * Calculates the SVG stroke-dashoffset for the progress circle.
   * The offset decreases as the skill level increases, creating the "fill" effect.
   * @param percentage - The skill level from 0 to 100.
   * @returns The calculated offset value.
   */
  const calculateStrokeOffset = (percentage: number): number => {
    // The logic is: totalCircumference - (filled part)
    return CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * percentage) / 100;
  };

  return (
    // React.Fragment is not needed for a single root element like <li>
    <li data-name={skillName.toUpperCase()} data-percent={`${levelOfSkill}%`}>
      {/* First SVG: The background track of the circle */}
      <svg viewBox="-10 -10 220 220">
        <g fill="none" strokeWidth={4} transform="translate(100,100)">
          <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
          <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
          <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
          <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
          <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
          <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
        </g>
      </svg>
      {/* Second SVG: The animated progress indicator */}
      <svg viewBox="-10 -10 220 220">
        <path
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
          strokeDashoffset={calculateStrokeOffset(levelOfSkill)}
          // You will need CSS to set the stroke-dasharray to 629 for this to work.
          // e.g., in your CSS file: path { stroke-dasharray: 629; }
        />
      </svg>
    </li>
  );
});

// Setting a display name is good practice for debugging with React DevTools.
SkillItem.displayName = "SkillItem";

export default SkillItem;
