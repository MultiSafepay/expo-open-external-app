package expo.modules.teamviewer

import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.util.Log
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

var AppName = "ExpoTeamViewer"

class ExpoTeamViewerModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoTeamViewer')` in JavaScript.
    Name(AppName)

    Function ("checkIsAppInstalled") { packageName: String ->
      Log.d(AppName, "checkIsAppInstalled $packageName")
      val packageManager = appContext?.reactContext?.packageManager

      try {
        val pm = packageManager?.getPackageInfo(packageName, 0)
        Log.d(AppName, pm.toString())
        return@Function true;
      } catch ( e: PackageManager.NameNotFoundException) {
        Log.e(AppName, e.toString())
      }
      return@Function false;
    }

    Function ("openApp") { packageName: String ->
      Log.d(AppName, "openApp $packageName")
      val packageManager = appContext?.reactContext?.packageManager
      val launchIntent = packageManager?.getLaunchIntentForPackage(packageName)
      if (launchIntent != null) {

        launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        appContext?.reactContext?.startActivity(launchIntent)
        return@Function true;
      }
      return@Function false;
    }

    Function ("openAppInStore") { packageName: String ->
      Log.d(AppName, "openAppInStore $packageName")
      try{
        var launchIntent = Intent(Intent.ACTION_VIEW);
        launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        launchIntent.setData(Uri.parse("market://details?id=$packageName"));
        appContext?.reactContext?.startActivity(launchIntent);
        return@Function true;
      } catch(e: Exception){
        Log.e(AppName, e.toString())
      }
      return@Function false;
    }
  }
}
