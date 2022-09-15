#include "main.h"
/**
 * more_numbers - prints 0-14 to the standard output 10 times
 *
 * Return: Doesn't return anything, void
 */
void more_numbers(void)
{
int j, i;

for (j = 0; j < 10; j++)
{
for (i = 0; i <= 14; i++)
{
if (i > 9)
{
_putchar(i / 10 + '0');
}
_putchar(i % 10 + '0');
}
_putchar('\n');
}
}
