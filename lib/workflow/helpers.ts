import { TaskRegistry } from '@/lib/workflow/task/Registry';
import { AppNode } from '@/types/appNode';

export const calculateWorkflowCost = (nodes: AppNode[]) => {
  return nodes.reduce((acc, node) => {
    return acc + TaskRegistry[node.data.type].credits;
  }, 0);
}
