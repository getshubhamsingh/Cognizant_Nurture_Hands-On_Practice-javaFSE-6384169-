-- Scenario 1: Apply 1% discount to loan interest rates for customers over 60 years old

DECLARE
    CURSOR cust_cursor IS
        SELECT CustomerID, DOB FROM Customers;

    v_age NUMBER;
BEGIN
    FOR cust_rec IN cust_cursor LOOP
        -- Calculate age in years
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, cust_rec.DOB) / 12);

        -- Check if customer is older than 60
        IF v_age > 60 THEN
            -- Apply 1% discount on all loans for that customer
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust_rec.CustomerID;

            -- Print confirmation
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount to customer ID ' || cust_rec.CustomerID);
        END IF;
    END LOOP;
END;
/
