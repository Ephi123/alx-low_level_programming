#include "main.h"
/**
 * print_diagonal - prints a diagonal
 * @n: length of the line
 *
 * Return: void
 */
void print_diagonal(int n)
{
int tmp = n, i;

if (n > 0)
{
while (n > 0)
{
for (i = tmp - n; i > 0; i--)
{
_putchar(' ');
}
_putchar('\\');
_putchar('\n');
n--;
}
}
else
{
_putchar('\n');
}
}
