#include <stdio.h>
/**
 * main - Entry point
 *
 * Return: Always 0 (Success)
 */
int main(void)
{
int n;
int m;
for (n = 48; n <= 57; n++)
{
for (m = n + 1; m <= 57; m++)
{
if (m == n)
{
continue;
}
putchar(n);
putchar(m);
if (n == 56 && m == 57)
{
break;
}
putchar(',');
putchar(' ');
}
}
putchar('\n');
return (0);
}
