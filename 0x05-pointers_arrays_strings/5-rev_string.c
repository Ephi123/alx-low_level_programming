#include "main.h"
/**
 * rev_string -> reverese
 * @s: parameter
 */
void rev_string(char *s)
{
char temp;
int len1, len2, i;
len1 = 0;
len2 = 0;

while (s[len1] != '\0')
len1++;
len2 = len1 - 1;
for (i = 0; i <= len1 / 2; len1++)
{
temp = s[i];
s[i] = s[len2];
s[len2] = temp;
len2 - = 1;
}
}
