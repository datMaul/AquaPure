package com.backend.aquapurebackend.repository;
import java.sql.*;

public class DonationRepository {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "G_16", "3XcGZG4Sgr");
            stmt = conn.createStatement();

            String sql = "SELECT * FROM mytable";
            rs = stmt.executeQuery(sql);

            // this loop will help get the stuff inside the table
            while (rs.next()) {
                String column1 = rs.getString("column1");
                int column2 = rs.getInt("column2");
                System.out.printf(column1,column2);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // in case the thing break this should stop it from breaking
            try { rs.close(); } catch (Exception e) {}
            try { stmt.close(); } catch (Exception e) {}
            try { conn.close(); } catch (Exception e) {}
        }
    }
}
