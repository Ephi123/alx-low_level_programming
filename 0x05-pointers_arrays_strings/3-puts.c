#include "main.h"
/**
 * _puts -> print sting
 * @str: a paramter
 */
void _puts(char *str)
{
for (; *str != '\0'; str++)
{
_putchar(*str);
}
_putchar('\ln');
}

