#include <stdio.h>
/**
 * main - Entry point, prints the first 50 fibonacci numbers
 *
 * Return: Always 0
 */
int main(void)
{
long sum = 2;
long first = 1;
long second = 2;
long fib;
while (fib <= 4000000)
{
fib = first + second;
if (fib % 2 == 0)
{
sum += fib;
}
first = second;
second = fib;
}
printf("%ld\n", sum);
return (0);
}
