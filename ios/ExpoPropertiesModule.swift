import ExpoModulesCore

public class ExpoPropertiesModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoProperties")
    
    Function("setString") { (key: String, value: String) -> Void in
      UserDefaults.standard.set(value, forKey: key)
    }

    Function("getString") { (key: String) -> String? in
      return UserDefaults.standard.string(forKey: key) ?? nil
    }
    
    Function("setNumber") { (key: String, value: Double) -> Void in
      UserDefaults.standard.set(value, forKey: key)
    }
    
    Function("getNumber") { (key: String) -> Double in
      return UserDefaults.standard.double(forKey: key)
    }

    Function("setBoolean") { (key: String, value: Bool) -> Void in
      UserDefaults.standard.set(value, forKey: key)
    }
    
    Function("getBoolean") { (key: String) -> Bool in
      return UserDefaults.standard.bool(forKey: key)
    }
  }
}
