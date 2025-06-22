import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        SearchEngine engine = new SearchEngine();

        System.out.println(" Welcome to Mini E-commerce Platform");
        System.out.print("Enter search keyword (name or category): ");
        String keyword = scanner.nextLine();

        engine.search(keyword);

        scanner.close();
    }
}
