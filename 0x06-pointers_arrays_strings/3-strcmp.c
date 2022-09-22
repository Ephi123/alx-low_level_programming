#include "main.h"
/**
 * _strcmp -> compare two string
 * @s1: string1
 * @s2: string2
 * Return: result
 */
int _strcmp(char *s1, char *s2)
{
int res;
if (s1[0] && s2[0] != '\0')
res = s1[0] - s2[0];
return (res);
}
