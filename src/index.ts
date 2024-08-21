// Import the native module. On web, it will be resolved to ExpoTeamViewer.web.ts
// and on native platforms to ExpoTeamViewer.ts
import ExpoTeamViewerModule from "./ExpoTeamViewerModule";

export const checkIsAppInstalled = (appName: string): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean =
    ExpoTeamViewerModule?.checkIsAppInstalled?.(appName);
  return isAppInstalled ?? false;
};

export const openApp = (appName: string): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean = ExpoTeamViewerModule?.openApp(appName);

  return isAppInstalled;
};

export const openAppInStore = (appName: string): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const isAppInstalled: boolean = ExpoTeamViewerModule?.openAppInStore(appName);

  return isAppInstalled;
};
