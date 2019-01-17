
class ConsoleLogger {
    handle() {console.log(`i'm console log`)}
}

class Alert {
    handle() {alert(`i'm alert`)}
}

(strategy => {strategy.handle()})(new ConsoleLogger());

(strategy => {strategy.handle()})(new Alert());