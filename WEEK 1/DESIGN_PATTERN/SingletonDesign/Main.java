public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if(logger1 == logger2){
            System.out.println("Instances are same");
        }
        else{
            System.out.println("Instances are not same");
        }
    }
}
