public class Product {
    String name;
    String category;
    double price;

    public Product(String name, String category, double price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public void display() {
        System.out.println("Name: " + name + ", Category: " + category + ", Price: ₹" + price);
    }
}
