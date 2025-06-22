public class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("logger is initialized");
    }

    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}
