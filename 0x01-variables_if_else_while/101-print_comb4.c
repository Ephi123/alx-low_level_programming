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
int o;
for (n = 48; n <= 57; n++)
{
for (m = n + 1; m <= 57; m++)
{
for (o = m + 1; o <= 57; o++)
{
if (m == n && n == o)
{
continue;
}
putchar(n);
putchar(m);
putchar(o);
if (n == 55 && m == 56 && o == 57)
{
break;
}
putchar(',');
putchar(' ');
}
}
}
putchar('\n');
return (0);
}
