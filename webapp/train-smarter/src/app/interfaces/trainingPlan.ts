export interface TrainingPlan{
  trainingPlanId?: string;
  uid: string;
  name: string;
  description: string;
  period: string;
  periodInterval: number;
  exercises: Array<any>;
}
