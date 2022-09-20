#include "main.h"
#include <string.h>
/**
 * rev_string -> reverese
 * @s: parameter
 */
void rev_string(char *s)
{
int len;
int i;
len = strlen(s);
for (i = 0; i <= len-1; len--)
{
_putchar(s[len]);
}
_putchar('\n');
}
