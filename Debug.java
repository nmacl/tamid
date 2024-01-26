/*

Challenge 3: Debugging
This program is supposed to calculate how much money you would have left if you were given a penny and multiplied it by 30 days.

You can find the code in the Debug.java file.

Your output should look exactly like the output below.

*/

public class Debug {
  public static void main(String args[]) {
      final int DAYS = 30;
      double money = 0.01; 
      int day; // int type
      for(day = 1; day <= DAYS; day++){ // fixed loop
        System.out.println("After day " + day + " you have " + money); // print statement reformatted
        money = 2 * money; // include day 30
      }
   }
}