#include "main.h"
/**
 * _strncpy - copy string from source to destination
 * @dest: destination
 * @src: source
 * @n: number of charcter
 * Return: dest
 */
char *_strncpy(char *dest, char *src, int n)
{
int i = 0;
int j;
while ((src[i] != '\0') && (i < n))
{
if (src[i] == '\n')
{
while (dest[j] != '\0')
{
dest[j] = '\0';
j++;
}
}
dest[i] = src[i];
i++;
j = i + 1;
}
return (dest);
}
