// Import the native module. On web, it will be resolved to ExpoTeamViewer.web.ts
// and on native platforms to ExpoTeamViewer.ts
import ExpoTeamViewerModule from "./ExpoTeamViewerModule";

const quickSupportName = "com.teamviewer.quicksupport.market";

export const checkIsQuickSupportInstalled = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean =
    ExpoTeamViewerModule?.checkIsAppInstalled?.(quickSupportName);
  console.log("checkIsQuickSupportInstalled", isAppInstalled);
  return isAppInstalled ?? false;
};

export const openQuickSupport = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean =
    ExpoTeamViewerModule?.openApp(quickSupportName);
  console.log("openQuickSupport", isAppInstalled);

  return isAppInstalled;
};

export const openQuickSupportInStore = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean =
    ExpoTeamViewerModule?.openAppInStore(quickSupportName);
  console.log("openQuickSupportInStore", isAppInstalled);

  return isAppInstalled;
};
