#include "main.h"
/**
 * reverse_array -> functionn
 * @a: string
 * @n: no of char
 */
void reverse_array(int *a, int n)
{
int last = 12;
int i = 0;
while (i <= last)
{
if (last != n - 1)
putchar(',');
putchar(' ');
print_number(a[last]);
last--;
}
putchar('\n');
}
/**
 * print_number - function to conver integer to charcter
 * @n: integer
 */
void print_number(int n)
{
unsigned int num = n;
if (n < 0)
{
putchar('-');
num = -num;
}
if ((num / 10) > 0)
print_number(num / 10);
putchar((num % 10) + '0');
}
