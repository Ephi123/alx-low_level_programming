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
for (i = 0; i <= len; len--)
{
_putchar(s[len]);
}
s = null;
_putchar('\n');
}
