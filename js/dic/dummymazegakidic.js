// dummymazegakidic.js - dummy mazegaki conversion dic
// 
// Copyright (C) 2013  YUSE Yosihiro
// 
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA


var mazegakidic = null;

// ===================================================================
// �� ����/JS �Ǹ򤼽��Ѵ����ץ��������Ѥ�����ˡ
//
// (1) ���Υե������Ʊ������ (js/dic/) �� mazegakidic.js ��������롣
//     �����Ϥ��Υե�����������˼������Ȥ��ꡣ
//
// (2) �������� mazegakidic.js �� kansakujs.html ���
//     <script type="text/javascript" src="js/dic/mazegakidic.js"></script>
//     �Ȥ��ƥ��ɤ��롣 kansakujs.html ��ˤ��Ǥ˥����ȥ����Ȥ���
//     ���Ҥ��Ƥ���Τǡ������Ȥ򳰤��Ф褤��
//
// (3) �֥饦���� kansakujs.html �˥����������롣 [����(C)] �ѥͥ��
//     �򤼽��Ѵ����ץ��������Ǥ���褦�ˤʤäƤ���Τǡ�����å�
//     ���ƥ����å�����
//
// (4) [����(J)] ��ˡ����ۤ󤴡٤ʤɤ����Ϥ���ȡ��ܸ�٤Υ����ɤ�
//     ɽ������롣
//
// �� ����/JS �ϡؤ�������ʡ��٤Τ褦�ˡء��٤ǽ������Ѹ��ɤߤˤ�
//    (���ߤΤȤ���) �б����Ƥ��ʤ��Τǡ��ؤ�������ʤ��٤ʤɤΤ褦��
//    �ء��٤�ޤޤʤ����߷��� mazegakidic.js ���������Τ��褤��
//
// �� �Ū�� 73374 �ԡ� 1973671 �Х��Ȥ� mazegakidic.js �������
//    �ºݤ� ����/JS �˥��ɤ����Ȥ�����ʬ��®��ư�������
//    ���� mazegakidic.js �ϥ��������֤˴ޤ��ˤ��礭�����롣

// ===================================================================
// mazegakidic.js �ν�������
// ===================================================================
//
// var mazegakidic = new Object();
// 
// var _ = mazegakidic;
// 
// _["��"] = "/��/��/��/��/��/";
// _["����"] = "/�˸�/";
// _["����"] = "/��/��/��/��/��/��/��/��/��/��/ۣ/�/";
// _["��������ʤ�"] = "/���Ƥ�ʤ�/";
// // ... ά ...
// _["�ˤۤ�"] = "/���ܸ�/";
// _["�ˤۤ��"] = "/���ܸ�/";
// _["���ܤ�"] = "/���ܸ�/";
// _["���ܸ�"] = "/���ܸ�/";
// _["���ۤ�"] = "/���ܸ�/";
// _["���ۤ��"] = "/���ܸ�/";
// _["���ܤ�"] = "/���ܸ�/";
// // ... ά ...
// _["��"] = "/��/";
// _["��"] = "/��/";
// _["��"] = "/��/";
// _["��"] = "/��/";
