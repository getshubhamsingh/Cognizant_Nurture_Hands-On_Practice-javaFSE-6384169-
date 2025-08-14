import java.util.Scanner;

public class FinancialForecast {
    public static double forecast(double principal, double rate, int years) {
        if (years == 0)
            return principal;
        return forecast(principal * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

       
        System.out.print("Enter principal amount (Rs): ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual interest rate (in %, e.g., 8 for 8%): ");
        double ratePercent = scanner.nextDouble();
        double rate = ratePercent / 100; 

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

       
        double futureValue = forecast(principal, rate, years);

        
        System.out.printf("Future value after %d years: Rs%.2f%n", years, futureValue);
        
        scanner.close();
    }
}
