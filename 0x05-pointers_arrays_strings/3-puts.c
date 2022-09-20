#include "main.h"
#include <string>
/**
 * _puts -> print sting
 * @str: a paramter
 */
void _puts(char *str)
{
int len = strlen(str);
int i;
for (; str <= len; str++)
{
_putchar(*str);
}
_putchar('\n');
}

