import React, { ReactElement } from "react";
import Skill from "../Components/Skill";
import { SkillsIhave } from "../Constants/skills";
import Oval from "../starter-code/assets/images/Group 26.png"


interface Props {}

function Skills({}: Props): ReactElement {
  return (
    <div className="bg-black  text-white relative py-[1%]">
      <div className="grid grid-cols-2  md:grid-cols-3 md:gap-y-[20%] md:gap-x-[20%] w-[80%] py-[10%] mx-auto">
        {SkillsIhave.map((item) => {
          return (
            <Skill
              key = {item.id}
              name={item.name}
              numberofExperience={item.numberOfExperience}
            />
          );
        })}
      </div>
      <img className = "absolute right-0 top-[20%] " src = {Oval} alt = "oval" />
    </div>
  );
}

export default Skills;
