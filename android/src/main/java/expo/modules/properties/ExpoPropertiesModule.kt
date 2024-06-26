package expo.modules.properties

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable

class ExpoPropertiesModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoProperties")

    Function("setString") { key: String, value: String ->
      getPreferences().edit().putString(key, value).commit()
    }

    Function("getString") { key: String? ->
      return@Function getPreferences().getString(key, null)
    }

    Function("setNumber") { key: String, value: Double ->
      getPreferences().edit().putString(key, value.toString()).commit()
    }

    Function("getNumber") { key: String ->
      var s: String? = getPreferences().getString(key, "0")
      return@Function s?.toDouble()
    }

    Function("setBoolean") { key: String, value: Boolean ->
      getPreferences().edit().putString(key, value.toString()).commit()
    }

    Function("getBoolean") { key: String ->
      var s: String? = getPreferences().getString(key, "false")
      return@Function s?.toBoolean()
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }
}