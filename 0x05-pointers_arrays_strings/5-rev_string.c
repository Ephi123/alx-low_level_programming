#include "main.h"
/**
 * rev_string -> reverese
 * @s: parameter
 */
void rev_string(char *s)
{
int len;
int len2;
int i;
for (len = 0; s[len] != '\0'; len++)
{
len2 = len;
}
for (i = 0; i <= len2; len2--)
{
_putchar(s[len2]);
}
_putchar('\n');
}
