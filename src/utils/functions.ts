/**
 * workout: [
 *  {
 *    type: "single | combin",
 *    exercises: [
 *      { name: "BB-001", rep: 12, set: 4, difficulty: "low | mid | hard", duration: "" }
 *    ]
 *  }
 * ]
 */

export type TPlanObj = {
  title: string;
  key: string;
  children?: TPlanObj[];
  workout?: any[];
  type?: "day" | "week" | "month";
};

type TTreeWorkoutPlanGenerator = {
  months: number;
  weeks: number;
  days: number;
};

export const TreeWorkoutPlanGenerator = ({
  months,
  weeks,
  days,
}: TTreeWorkoutPlanGenerator) => {
  let arrayData = [];

  if (months > 0) {
    for (let i = 1; i <= months; i++) {
      let month: TPlanObj = {
        title: `Month ${i}`,
        key: `${i}`,
        children: [],
        type: "month",
      };

      for (let j = 1; j <= weeks; j++) {
        let week: TPlanObj = {
          title: `Week ${j}`,
          key: `${i}-${j}`,
          children: [],
          type: "week",
        };

        for (let k = 1; k <= days; k++) {
          week.children?.push({
            title: `Day ${k}`,
            key: `${i}-${j}-${k}`,
            type: "day",
          });
        }

        month.children?.push(week);
      }

      arrayData.push(month);
    }
  } else {
    let week: TPlanObj = {
      title: `My Week`,
      key: `1-1`,
      children: [],
      type: "week",
    };

    for (let k = 1; k <= days; k++) {
      week.children?.push({
        title: `Day ${k}`,
        key: `1-1-${k}`,
        type: "day",
      });
    }

    arrayData.push(week);
  }

  return arrayData;
};
