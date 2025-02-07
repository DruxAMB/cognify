import { TaskType } from '@/types/task';
import { WorkflowTask } from '@/types/workflow';

import { LaunchBrowserTask } from '@/lib/workflow/task/launch-browser';
import { PageToHtmlTask } from '@/lib/workflow/task/page-to-html';
import { ExtractTextFromElementTask } from '@/lib/workflow/task/extract-text-from-element';
import { FillInputTask } from '@/lib/workflow/task/fillInput';
import { ClickElementTask } from '@/lib/workflow/task/clickElement';
import { WaitForElementTask } from '@/lib/workflow/task/waitForElement';
import { DeliverViaWebhookTask } from '@/lib/workflow/task/deliverViaWebhook';
import { ExtractDataWithAiTask } from '@/lib/workflow/task/extractDataWithAi';
import { ReadPropertyFromJsonTask } from '@/lib/workflow/task/readPropertyFromJson';
import { AddPropertyToJsonTask } from '@/lib/workflow/task/addPropertyToJson';
import { NavigateUrlTask } from '@/lib/workflow/task/navigateUrl';
import { ScrollToElementTask } from '@/lib/workflow/task/scrollToElement';

type Registry = {
  [K in TaskType]: WorkflowTask & { type: K };
};

export const TaskRegistry: Registry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
  FILL_INPUT: FillInputTask,
  CLICK_ELEMENT: ClickElementTask,
  WAIT_FOR_ELEMENT: WaitForElementTask,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookTask,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAiTask,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonTask,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonTask,
  NAVIGATE_URL: NavigateUrlTask,
  SCROLL_TO_ELEMENT: ScrollToElementTask,
};
