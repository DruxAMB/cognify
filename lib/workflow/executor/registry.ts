import { ExecutionEnvironment } from '@/types/executor';
import { TaskType } from '@/types/task';
import { WorkflowTask } from '@/types/workflow';

import { LaunchBrowserExecutor } from '@/lib/workflow/executor/launchBrowserExecutor';
import { PageToHtmlExecutor } from '@/lib/workflow/executor/pageToHtmlExecutor';
import { ExtractTextFromElementExecutor } from '@/lib/workflow/executor/extract-text-from-element-executor';
import { FillInputExecutor } from '@/lib/workflow/executor/fillInputExecutor';
import { ClickElementExecutor } from '@/lib/workflow/executor/clickElementExecutor';
import { WaitForElementExecutor } from '@/lib/workflow/executor/waitForElementExecutor';
import { DeliverViaWebhookExecutor } from '@/lib/workflow/executor/deliverViaWebhookExecutor';
import { ExtractDataWithAiExecutor } from '@/lib/workflow/executor/extractDataWithAiExecutor';
import { ReadPropertyFromJsonExecutor } from '@/lib/workflow/executor/readPropertyFromJsonExecutor';
import { AddPropertyToJsonExecutor } from '@/lib/workflow/executor/addPropertyoJsonExecutor';
import { NavigateUrlExecutor } from '@/lib/workflow/executor/navigateUrlExecutor';
import { ScrollToElementExecutor } from '@/lib/workflow/executor/scrollToElementExecutor';

type ExecuterFn<T extends WorkflowTask> = (environment: ExecutionEnvironment<T>) => Promise<boolean>;

type RegistryType = {
  [K in TaskType]: ExecuterFn<WorkflowTask & { type: K }>;
};

export const ExecutorRegistry: RegistryType = {
  LAUNCH_BROWSER: LaunchBrowserExecutor,
  PAGE_TO_HTML: PageToHtmlExecutor,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
  FILL_INPUT: FillInputExecutor,
  CLICK_ELEMENT: ClickElementExecutor,
  WAIT_FOR_ELEMENT: WaitForElementExecutor,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookExecutor,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAiExecutor,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonExecutor,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonExecutor,
  NAVIGATE_URL: NavigateUrlExecutor,
  SCROLL_TO_ELEMENT: ScrollToElementExecutor,
};
