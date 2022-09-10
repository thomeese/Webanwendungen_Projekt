export interface TrainingPlan{
  trainingPlanId?: string;
  uid: string;
  name: string;
  description: string;
  period: string;
  exercises: Array<any>;
}
