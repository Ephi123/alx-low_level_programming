#include "main.h"
#include <string>
/**
 * print_rev -> print sting
 * @s: a paramter
 */
void print_rev(char *s)
{
int i, n;
n = strlen(s);
for (i = n - 1; i >= 0; i--)
{
_putchar(s[i]);
}
_putchar('\n');
}
