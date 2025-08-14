import java.util.ArrayList;

public class SearchEngine {
    ArrayList<Product> products = new ArrayList<>();

    public SearchEngine() {
    
        products.add(new Product("iPhone 15", "Electronics", 79999));
        products.add(new Product("T-shirt", "Clothing", 499));
        products.add(new Product("Laptop", "Electronics", 55999));
        products.add(new Product("Shoes", "Footwear", 1499));
        products.add(new Product("Washing Machine", "Home Appliances", 19999));
    }

    public void search(String keyword) {
        boolean found = false;
        System.out.println(" Search Results:");
        for (Product p : products) {
            if (p.name.toLowerCase().contains(keyword.toLowerCase()) ||
                p.category.toLowerCase().contains(keyword.toLowerCase())) {
                p.display();
                found = true;
            }
        }
        if (!found) {
            System.out.println(" No products found for: " + keyword);
        }
    }
}
